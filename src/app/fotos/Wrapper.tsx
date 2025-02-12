const Wrapper = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="w-full *:h-full columns-md *:rounded-lg p-4">
            {children}
        </div>
    )
}

export default Wrapper