<?php
    $dotenv = parse_ini_file('.env');
    $username_env = $dotenv['USERNAME'];
    $password_env = $dotenv['PASSWORD'];

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);

    $username = $data['username'] ?? '';
    $password = $data['password'] ?? '';

    if ($username === $username_env && $password === $password_env) {
        echo json_encode(['status' => 'success', 'message' => 'Login successful']);
    } else {
        http_response_code(401);
        echo json_encode(['status' => 'failed', 'message' => 'Invalid credentials']);
    }
?>
