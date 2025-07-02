"use client"

import { Button } from "@/components/ui/button";
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {FaGoogle, FaVk} from "react-icons/fa";

export default function LoginPage() {
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
                        <Button variant="outline" className="grow">
                            <FaGoogle/>
                        </Button>
                        <Button variant="outline" className="grow">
                            <FaVk/>
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}