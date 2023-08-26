'use client'

import { Trash2, UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'
import { formatBytes } from '@/utils/format-bytes'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Button } from '@/components/Button'
import { FileItem } from './FileItem'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div className="mt-4 space-y-3" ref={parent}>
      {files.map((file) => {
        return <FileItem name={file.name} size={file.size} key={file.name} />
      })}
    </div>
  )
}
