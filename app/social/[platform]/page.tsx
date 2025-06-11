import { redirect } from "next/navigation"

export default function SocialRedirectPage({ params }: { params: { platform: string } }) {
  const socialLinks = {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    twitter: "https://twitter.com/",
    youtube: "https://www.youtube.com/",
  }

  const platform = params.platform.toLowerCase()
  const url = socialLinks[platform as keyof typeof socialLinks]

  if (url) {
    redirect(url)
  }

  // Fallback if platform not found
  redirect("/")
}
