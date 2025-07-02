import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '@/db'
import * as schema from '../db/schema'
import {eq} from "drizzle-orm";
import {User} from "@/db/schema";
import {NextRequest} from "next/server";


export const auth = betterAuth({
    logger: {
        level: "debug"
    },
    database: drizzleAdapter(db, {
        provider: 'pg', // or 'sqlite' or 'mysql'
        schema: {
            user: schema.users,
            session: schema.sessions,
            account: schema.accounts,
            verification: schema.verifications,
        }
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false, // Set to true for production
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },
        // github: {
        //     clientId: process.env.GITHUB_CLIENT_ID as string,
        //     clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        // },
        vk: {
            clientId: process.env.VK_CLIENT_ID!,
            clientSecret: process.env.VK_CLIENT_SECRET!,
        },
    },
    session: {
        expiresIn: 60 * 60 * 24 * 7, // 7 days
        updateAge: 60 * 60 * 24, // 24 hours
    },
    callbacks: {
        async onSignUp(user: User, request: NextRequest) {
            // Create user profile after successful signup
            await db.insert(schema.userProfiles).values({
                id: crypto.randomUUID(),
                userId: user.id,
                targetSubject: 'mathematics', // default
                currentLevel: 1,
                totalXP: 0,
                currentStreak: 0,
                longestStreak: 0,
                lastActivityDate: new Date(),
            })

            console.log('New user signed up:', user.email)
            return user
        },
        async onSignIn(user: User, request: NextRequest) {
            // Update last activity
            await db.update(schema.userProfiles)
                .set({
                    lastActivityDate: new Date(),
                    updatedAt: new Date()
                })
                .where(eq(schema.userProfiles.userId, user.id))

            console.log('User signed in:', user.email)
            return user
        },
    },
    plugins: [],
})

export type Session = typeof auth.$Infer.Session