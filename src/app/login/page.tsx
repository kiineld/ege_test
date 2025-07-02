'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn, useSession } from '@/lib/auth-client'
import { useEffect } from 'react'
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {FaGoogle, FaVk} from "react-icons/fa";

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()
    const { data: session } = useSession()

    useEffect(() => {
        if (session) {
            router.push('/dashboard')
        }
    }, [session, router])

    if (session) {
        return <div>Redirecting...</div>
    }

    const handleGoogleSignIn = async () => {
        setIsLoading(true)
        setError(null)
        try {
            await signIn.social({
                provider: 'google',
                callbackURL: '/dashboard',
            })
        } catch (err) {
            setError('Произошла ошибка. Попробойте обновить страницу.')
            console.error('Google sign-in error:', err)
        } finally {
            setIsLoading(false)
        }
    }

    const handleVkSignIn = async () => {
        setIsLoading(true)
        setError(null)
        try {
            await signIn.social({
                provider: 'VK',
                callbackURL: '/dashboard',
            })
        } catch (err) {
            setError('Произошла ошибка. Попробойте обновить страницу.')
            console.error('Vk sign-in error:', err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen w-7xl">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Войти в аккаунт</CardTitle>
                    <CardDescription>
                        Введите почту для входа в аккаунт
                    </CardDescription>
                    <CardAction>
                        <Button variant="link">Создать аккаунт</Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Почта</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="informatika@ege.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Пароль</Label>
                                    <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Забыли пароль?
                                    </a>
                                </div>
                                <Input id="password" type="password" required />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full">
                        Войти
                    </Button>
                    <div className="flex w-full gap-2">
                        <Button variant="outline" disabled={isLoading} onClick={handleGoogleSignIn} className="grow">
                            {isLoading ? 'Вход в' : 'Войти с'}
                            <FaGoogle/>
                        </Button>
                        <Button variant="outline" disabled={isLoading} onClick={handleVkSignIn} className="grow">
                            {isLoading ? 'Вход в' : 'Войти с'}
                            <FaVk/>
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}