'use client'

import {
  useEffect,
  useState,
  createContext,
  useContext,
  useCallback,
} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, AlertCircle, X } from 'lucide-react'
import { cn } from '@/lib/utils'

type ToastType = 'success' | 'error' | 'warning' | 'info'

interface Toast {
  id: string
  message: string
  type: ToastType
  duration?: number
}

interface ToastContextValue {
  toasts: Toast[]
  addToast: (message: string, type?: ToastType, duration?: number) => void
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const addToast = useCallback(
    (message: string, type: ToastType = 'info', duration = 5000) => {
      const id = Math.random().toString(36).substring(2, 9)
      setToasts((prev) => [...prev, { id, message, type, duration }])
    },
    []
  )

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      {mounted && (
        <div
          className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3"
          role="region"
          aria-label="Notifications"
        >
          <AnimatePresence mode="popLayout">
            {toasts.map((toast) => (
              <ToastItem
                key={toast.id}
                toast={toast}
                onClose={() => removeToast(toast.id)}
              />
            ))}
          </AnimatePresence>
        </div>
      )}
    </ToastContext.Provider>
  )
}

function ToastItem({ toast, onClose }: { toast: Toast; onClose: () => void }) {
  useEffect(() => {
    if (toast.duration && toast.duration > 0) {
      const timer = setTimeout(onClose, toast.duration)
      return () => clearTimeout(timer)
    }
  }, [toast.duration, onClose])

  const icons = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertCircle,
    info: AlertCircle,
  }

  const Icon = icons[toast.type]

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'flex min-w-[320px] max-w-[420px] items-start gap-3 border p-4 shadow-lg',
        'bg-brand-white dark:bg-brand-charcoal',
        toast.type === 'success' && 'border-green-500',
        toast.type === 'error' && 'border-red-500',
        toast.type === 'warning' && 'border-amber-500',
        toast.type === 'info' && 'border-brand-gray'
      )}
      role="alert"
      aria-live="polite"
    >
      <Icon
        className={cn(
          'mt-0.5 h-5 w-5 flex-shrink-0',
          toast.type === 'success' && 'text-green-500',
          toast.type === 'error' && 'text-red-500',
          toast.type === 'warning' && 'text-amber-500',
          toast.type === 'info' && 'text-brand-gray'
        )}
      />
      <p className="flex-1 text-sm text-brand-charcoal dark:text-brand-light">
        {toast.message}
      </p>
      <button
        onClick={onClose}
        className="flex-shrink-0 text-brand-gray transition-colors hover:text-brand-black dark:hover:text-brand-white"
        aria-label="Dismiss notification"
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  )
}
