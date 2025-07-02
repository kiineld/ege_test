'use client'

import {signOut, useSession} from "@/lib/auth-client";
import {Button} from "@/components/ui/button";


const handleSignOut = async () => {
    try {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    window.location.href = '/'
                }
            }
        })
    } catch (error) {
        console.error('Sign out error:', error)
    }
}

export default function DashboardPage() {
    const { data: session } = useSession()

    if (session){
        return (
            <div className="flex flex-col justify-center items-center min-h-screen w-7xl">
                <h1 className="font-bold text-2xl">Привет, {session.user.name}</h1>
                <p className="font-bold text-2xl">{session.user.email}</p>
                <Button onClick={handleSignOut}>Выйти</Button>
            </div>
        );
    }
    return (
        <div className="flex justify-center items-center min-h-screen w-7xl">
            <h1 className="font-bold text-2xl">Нет доступа</h1>
        </div>
    )
}
