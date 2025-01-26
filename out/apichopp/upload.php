<?php
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405);
        echo json_encode(['status' => 'failed', 'message' => 'Method Not Allowed']);
        exit;
    }

    if (!isset($_FILES['file'])) {
        http_response_code(400);
        echo json_encode(['status' => 'failed', 'message' => 'No file uploaded']);
        exit;
    }

    $file = $_FILES['file'];
    if ($file['type'] !== 'application/pdf' || $file['size'] > 15 * 1024 * 1024) {
        http_response_code(400);
        echo json_encode(['status' => 'failed', 'message' => 'Invalid file. Must be a PDF under 15MB']);
        exit;
    }

    $target = $_POST['type'] === 'delivery' ? 'carta-delivery.pdf' : 'carta-salon.pdf';

    if (move_uploaded_file($file['tmp_name'], $target)) {
        echo json_encode(['status' => 'success', 'message' => "$target actualizado"]);
    } else {
        http_response_code(500);
        echo json_encode(['status' => 'failed', 'message' => 'Error al subir el archivo']);
    }
?>