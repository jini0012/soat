"use client";

import QRCode from "react-qr-code";
import {
  Calendar,
  Clock,
  MapPin,
  Map,
  Ticket as TicketIcon,
} from "lucide-react";

export default function Ticket({
  title,
  location,
  address,
  date,
  ticketId,
  seat,
  info,
}: {
  title: string;
  location: string;
  address: string;
  date: string;
  ticketId: string;
  seat: string;
  info: string[];
}) {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const hours = dateObj.getHours().toString().padStart(2, "0");
  const minutes = dateObj.getMinutes().toString().padStart(2, "0");

  const dateStr = `${year}년 ${month}월 ${day}일`;
  const timeStr = `${hours}:${minutes}`;

  return (
    <div className="flex justify-center items-center p-4">
      <article className="relative w-80 bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200">
        {/* Ticket stub edge */}
        {/* <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500"></div> */}

        {/* Top portion with title and event details */}
        <div className="relative p-6 pb-4">
          <h4 className="sr-only">티켓: {title}</h4>
          <div className="flex items-center mb-2">
            <TicketIcon className="text-flesh-500 mr-2" size={20} />
            <p className="text-2xl font-bold bg-gradient-to-r from-flesh-500 to-flesh-700 bg-clip-text text-transparent">
              {title}
            </p>
          </div>

          <div className="space-y-2 mt-4">
            <p className="flex items-center text-sm font-medium text-gray-700">
              <Calendar className="inline-block w-4 h-4 mr-2 text-flesh-500" />
              {dateStr}
              <span className="mx-2">•</span>
              <Clock className="inline-block w-4 h-4 mr-1 text-flesh-500" />
              {timeStr}
            </p>

            <p className="flex items-start text-sm text-gray-700 font-medium">
              <MapPin
                size={16}
                className="flex-shrink-0 mt-1 text-flesh-500 mr-2"
              />
              <span className="w-fit">{location}</span>
            </p>

            <p className="flex items-start text-sm text-gray-600">
              <Map
                size={16}
                className="flex-shrink-0 mt-1 text-flesh-500 mr-2"
              />
              <span className="w-fit">{address}</span>
            </p>
          </div>
        </div>

        {/* Perforation line */}
        <div className="relative py-2">
          <div className="absolute left-0 w-full border-t border-dashed border-gray-300"></div>
          <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-50 rounded-full transform translate-y-(-50%)"></div>
          <div className="absolute -right-2 top-0 w-4 h-4 bg-gray-50 rounded-full transform translate-y-(-50%)"></div>
        </div>

        {/* QR Code and seat information */}
        <div className="p-6 pt-4 bg-white">
          <div className="flex gap-x-2">
            <div className="w-1/2">
              <div className="bg-flesh-50 rounded-lg p-2 flex flex-col items-center justify-center border border-flesh-100 h-full">
                <QRCode
                  value={ticketId}
                  className="w-full h-auto p-2 bg-white"
                />
                <p className="text-xs pt-2 text-gray-500 text-center mt-1 break-keep">
                  입장 시 QR 코드를 보여 주세요
                </p>
              </div>
            </div>

            <div className="w-1/2 gap-y-3 grid grid-cols-1 grid-rows-2">
              <div className="bg-flesh-50 rounded-lg p-3 border border-flesh-100">
                <p className="text-xs text-flesh-700 mb-2">좌석 번호</p>
                <p className="font-bold text-lg text-flesh-900">{seat}</p>
              </div>

              <div className="bg-flesh-50 rounded-lg p-3 border border-flesh-100">
                <p className="text-xs text-flesh-700 mb-2">예매 번호</p>
                <p className="font-bold text-sm text-flesh-900 break-all">
                  {ticketId}
                </p>
              </div>
            </div>
          </div>

          {/* Information section */}
          <div className="mt-4 bg-flesh-50 rounded-lg p-4 border border-flesh-100">
            <p className="font-bold text-xs mb-2 text-flesh-800">
              꼭 확인해 주세요!
            </p>
            <ul className="text-xs list-disc ml-4 flex flex-col gap-y-2 text-flesh-900">
              {info.map((text, index) => (
                <li key={index + text}>{text}</li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <div className="flex mt-4 justify-end items-center">
            <img className="w-12" src="/images/icons/logo-temp.svg" alt="SO@" />
          </div>
        </div>
      </article>
    </div>
  );
}
