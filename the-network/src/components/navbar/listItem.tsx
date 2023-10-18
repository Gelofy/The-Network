import Link from 'next/link'
import navbarStyle from '@/styles/navbar.module.css'
import { IconPoo } from '@tabler/icons-react';

export default function NavbarListItem(){
    return(
        <li className='navbarListItem'>
            <Link className="flex gap-3" href="/">
                <IconPoo className='w-8 h-8 stroke-slate-500'></IconPoo>
                <p className='h-8 text-2xl align-middle text-slate-500'>Poop</p>
            </Link>
        </li>
    )
}