import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Header(){
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
                        <Link href="/login">Профиль</Link>
                    </Button>
                </div>
            </nav>
        </header>
    )
}