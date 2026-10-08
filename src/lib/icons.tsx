import {
  Brain,
  ClipboardList,
  Compass,
  Server,
  Shield,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Server,
  ClipboardList,
  Brain,
  Compass,
  Workflow,
  Sparkles,
}

export function getServiceIcon(name: string): LucideIcon {
  return iconMap[name] ?? Shield
}
