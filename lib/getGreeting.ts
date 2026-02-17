"use server"

export const getGreeting = async() => {
    const now = new Date()

    const wibHour = (now.getUTCHours() + 7) % 24

    if(wibHour >= 5 && wibHour < 10) return "Selamat Pagi!"
    if(wibHour >= 10 && wibHour < 15) return "Selamat Siang!"
    if(wibHour >= 15 && wibHour < 18) return "Selamat Sore!"
    return "Selamat Malam!"
}