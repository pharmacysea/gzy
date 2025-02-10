"use client"

import Link from 'next/link'
import { email, socialLinks } from '@/config/infoConfig'
import { CustomIcon } from '@/components/shared/CustomIcon'
import { useState } from 'react'
import { WechatModal } from '../about/WechatModel'

export default function SocialLinks() {
    const [showWechat, setShowWechat] = useState(false)

    return (
        <>
            <div className="mt-6 flex items-center gap-1">
                {socialLinks.map((item) => {
                    if (item.name === 'Wechat') {
                        return (
                            <button
                                key={item.name}
                                onClick={() => setShowWechat(true)}
                                type="button"
                                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                                <span className="sr-only">{item.name}</span>
                                <CustomIcon name={item.icon} size={22} />
                            </button>
                        )
                    }
                    return (
                        <Link
                            key={item.name}
                            href={item.href!}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                            <span className="sr-only">{item.name}</span>
                            <CustomIcon name={item.icon} size={22} />
                        </Link>
                    )
                })}
            </div>
            <div className="mt-8 border-t pt-8">
                <Link
                    href={`mailto:${email}`}
                    className="group flex flex-row ml-3 justify-start items-center text-md font-medium transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                >
                    <CustomIcon name="email" size={22}/>
                    <span className="ml-4">{email}</span>
                </Link>
            </div>
            <WechatModal 
                isOpen={showWechat} 
                onClose={() => setShowWechat(false)} 
            />
        </>
    )
}

