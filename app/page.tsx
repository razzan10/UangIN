import TypingText from "@/components/ui/typing-text"
import {WeeklyChart} from "@/components/weekly-chart"
import {ChartBarHorizontal} from "@/components/montly-chart"
import pfp from "@/public/randomImage.jpg"
import Image from "next/image"
import { getGreeting } from "@/lib/getGreeting"
import { UserData } from "@/data/userData"
import DataTable from "@/components/data-table"
import { Button } from "@/components/ui/button"
import {Plus} from "lucide-react"
import Link from "next/link"

const Home = async() => {

  const greeting = await getGreeting()

  return (
    <div className="flex justify-center px-6 text-white">
      <div className="mt-10 w-full max-w-6xl min-w-90 overflow-hidden space-y-6">
        <div className="p-6">
          <Image
          src={pfp}
          alt="pfp"
          width={50}
          height={50}
          className="rounded-full object-cover"
          />
          <h1 className="text-2xl font-bold capitalize mt-4">
             helloo, {UserData.name}
          </h1>
          <p className="text-muted-foreground">
            <TypingText text={greeting}/>
          </p>
        </div>

          <h1 className="text-center font-bold capitalize">Weekly & monthly reports</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="p-2">
            <WeeklyChart/>
          </div>
          <div className="p-2">
            <ChartBarHorizontal/>
          </div>
        </div>

        {/* Table-like content */}
        <div>
          <Link
          href="/reports"
          >
          <Button variant="outline" size="sm" className="capitalize">add new</Button>
          </Link>
        </div>
        <DataTable/>

      </div>
    </div>
  )
}

export default Home
