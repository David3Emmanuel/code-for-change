'use server'

import { createClient } from '@/app/utils/supabase'
import { UserRole } from '@/app/utils/types'
import { redirect } from 'next/navigation'

// TODO add schema validation

export async function signup(formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const firstName = formData.get('first') as string
    const lastName = formData.get('last') as string

    const supabase = createClient()

    const { data, error } = await supabase.auth.signUp({ email, password })
    if (!error) {
        await supabase.from('users').insert([{
            id: data.user!.id,
            first_name: firstName,
            last_name: lastName,
            role: UserRole.STUDENT,
        }])
        redirect('/')
    }
}

export async function login(formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const supabase = createClient()

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
        console.error(error)
    } else {
        redirect('/')
    }
}