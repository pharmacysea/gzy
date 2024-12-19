'use client'

import {
    Bank,
    GithubLogo,
    XLogo,
    InstagramLogo,
    Envelope,
    GraduationCap,
    Coffee,
    Butterfly,
    Pill,
    WechatLogo,
} from '@phosphor-icons/react'
import Image from 'next/image'
import cpu from '../../../public/images/icon/cpu.png'
import ECUST from '../../../public/images/icon/ECUST.png'


export function CustomIcon({ name, size = 20 }: { name: string; size?: number }) {
    switch (name) {
        case 'bank':
            return <Bank size={size} weight="duotone" />;
        case 'github':
            return <GithubLogo size={size} weight="duotone" />;
        case 'x':
            return <XLogo size={size} weight="duotone" />;
        case 'instagram':
            return <InstagramLogo size={size} weight="duotone" />;
        case "bsky":
            return <Butterfly size={size} weight="duotone" />
        case 'email':
            return <Envelope size={size} weight="duotone" />;
        case "college":
            return <GraduationCap size={size} weight="duotone" />;
        case "coffee":
            return <Coffee size={size} weight="duotone" />;
        case "pill":
            return <Pill size={size} weight="duotone" />;
        case "wechat":
            return <WechatLogo size={size} weight="duotone" />;
        case 'bilibili':
            return (
                <Image
                    src="/images/icon/bilibili.png"
                    alt="bilibili icon"
                    width={size}
                    height={size}
                />
            );
        case 'chinapu':
            return <Image src={cpu} alt="cpu icon" />;
        case 'ecust':
            return <Image src={ECUST} alt="ECUST icon" />;
        default:
            return null
    }
}