import React from "react"
import AllProblems from "./AllProblems"
import { UnderlineTabs } from "./Tabstw";
import Pagination from "./Paginationtw";

const people = [
      {
            name: 'Leslie Alexander',
            email: 'leslie.alexander@example.com',
            role: 'Co-Founder / CEO',
            imageUrl:
                  'https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3628695-3029920.png',
            lastSeen: '3h ago',
            lastSeenDateTime: '2023-01-23T13:23Z',
      },
      {
            name: 'Michael Foster',
            email: 'michael.foster@example.com',
            role: 'Co-Founder / CTO',
            imageUrl:
                  'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: '3h ago',
            lastSeenDateTime: '2023-01-23T13:23Z',
      },
      {
            name: 'Dries Vincent',
            email: 'dries.vincent@example.com',
            role: 'Business Relations',
            imageUrl:
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: null,
      },
      {
            name: 'Lindsay Walton',
            email: 'lindsay.walton@example.com',
            role: 'Front-end Developer',
            imageUrl:
                  'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: '3h ago',
            lastSeenDateTime: '2023-01-23T13:23Z',
      },
      {
            name: 'Courtney Henry',
            email: 'courtney.henry@example.com',
            role: 'Designer',
            imageUrl:
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: '3h ago',
            lastSeenDateTime: '2023-01-23T13:23Z',
      },
]

export default function Example({data}) {

      const img = 'https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3628695-3029920.png';

      return (
            <div className="container mx-auto w-[800px]">
                  {data.slice(0, 5).map((problem, idx) => (
                        <ul role="list" className="divide-y divide-gray-100">
                                    <li key={idx} className="flex justify-between gap-x-6 py-5">
                                          <div className="flex min-w-0 gap-x-4">
                                                <img className="h-12 w-12 flex-none" src={img} alt="" />
                                                <div className="min-w-0 flex-auto">
                                                      <p className="text-sm font-semibold leading-6 text-gray-900">{problem.name}</p>
                                                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">{problem.rating || 'Unrated'}</p>
                                                </div>
                                          </div>
                                          {/* <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                                <p className="text-sm leading-6 text-gray-900">{person.role}</p>
                                                {person.lastSeen ? (
                                                      <p className="mt-1 text-xs leading-5 text-gray-500">
                                                            Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                                                      </p>
                                                ) : (
                                                      <div className="mt-1 flex items-center gap-x-1.5">
                                                            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                                                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                                            </div>
                                                            <p className="text-xs leading-5 text-gray-500">Online</p>
                                                      </div>
                                                )}
                                          </div> */}
                                    </li>
                        </ul>
                  ))}
                  <Pagination />
                  {/* <UnderlineTabs /> */}
            </div>
      )
}