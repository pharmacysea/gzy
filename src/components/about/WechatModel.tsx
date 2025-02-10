import { Modal } from '../ui/Modal'
import Image from 'next/image'

interface WechatModalProps {
  isOpen: boolean
  onClose: () => void
}

export const WechatModal = ({ isOpen, onClose }: WechatModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            扫码添加微信
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        
        <div className="flex justify-center">
          <div className="relative w-64 h-64">
            <Image
              src="/images/Wechat.jpg" // 确保添加您的二维码图片
              alt="微信二维码"
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
          扫描上方二维码添加我的微信
        </p>
      </div>
    </Modal>
  )
}