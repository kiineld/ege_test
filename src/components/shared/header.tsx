'use client'

import {Button} from "@/components/ui/button";
import Link from "next/link";
import {useSession} from "@/lib/auth-client";
import Image from 'next/image'


export default function Header(){
    const { data: session } = useSession()

    if (session){
        return (
            <header className="absolute w-full bg-accent rounded-b-2xl">
                <nav className="flex justify-center items-center p-2">
                    <div className="h-full mr-auto">
                        <Button variant="ghost">
                            <Link href="/">Домашнаяя страница</Link>
                        </Button>
                    </div>
                    <div>
                        <Button variant="outline">
                            <Link href="/login" className="flex gap-2 justify-center items-center">
                                {session.user.name}
                                <Image
                                    src={session.user.image}
                                    alt={session.user.name}
                                    width={20}
                                    height={16}
                                    className="rounded-full"
                                />
                            </Link>
                        </Button>
                    </div>
                </nav>
            </header>
        )
    }
    return (
        <header className="absolute w-full bg-accent rounded-b-2xl">
            <nav className="flex justify-center items-center p-2">
                <div className="h-full mr-auto">
                    <Button variant="ghost">
                        <Link href="/">Домашнаяя страница</Link>
                    </Button>
                </div>
                <div>
                    <Button variant="outline">
                        <Link href="/login" className="flex gap-2">
                            Профиль
                        </Link>
                    </Button>
                </div>
            </nav>
        </header>
    )
}