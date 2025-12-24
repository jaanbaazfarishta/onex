// inkrush/app/component/ui/loadingscreen.jsx
import React from 'react'

const LoadingScreen = () => {
    
    return (
        <div className="fixed w-screen h-screen top-0 left-0 z-50 flex items-center justify-center bg-[var(--background)] text-[var(--foreground)]">
            <div className="animate-pulse text-3xl font-bold">
                Loading....
            </div>
        </div>
    )
}

export default LoadingScreen