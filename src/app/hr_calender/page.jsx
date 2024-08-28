'use client'
import AppLayout from '@/components/layouts/appLayout'
import Calender from '@/components/molecules/Calender'
import Events from '@/components/molecules/dashboard/Events'
import Holidays from '@/components/molecules/dashboard/Holidays'
import LeaveRequest from '@/components/molecules/dashboard/LeaveRequest'
import Meetings from '@/components/molecules/dashboard/Meetings'
import Projects from '@/components/molecules/dashboard/Projects'
import Tasks from '@/components/molecules/dashboard/Tasks'
import Traings from '@/components/molecules/dashboard/Traings'
import TravelRequest from '@/components/molecules/dashboard/TravelRequest'
import React from 'react'

function Page() {
    return (
        <AppLayout>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2"></div>
                <div className="space-y-6">
                    <div className="bg-white shadow-sm rounded-lg ">
                        <Calender />
                    </div>
                    <div className="bg-white p-4 shadow-sm rounded-lg space-y-4">
                        <div className="text-xl font-bold">Options</div>
                        <div className="space-y-2 *:cursor-pointer">
                            <Holidays />
                            <LeaveRequest />
                            <TravelRequest />
                            <Traings />
                            <Projects />
                            <Tasks />
                            <Events />
                            <Meetings />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Page