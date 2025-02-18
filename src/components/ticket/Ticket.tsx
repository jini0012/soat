"use client";

import QRCode from "react-qr-code";
import { Calendar, CircleSmall, Clock, Map, MapPin } from "lucide-react";

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
    <article className="flex text-black bg-white flex-col w-72 h-fit gap-y-4 border-2 rounded-md shadow-lg m-8 p-4">
      <div className="w-fit flex flex-col justify-center items-center gap-y-2 ml-auto mr-auto">
        <h4 className="sr-only">티켓: {title}</h4>
        <p className="text-xl font-bold">{title}</p>
        <p className="flex items-center text-sm font-bold gap-x-2">
          <span className="flex items-center">
            <Calendar className="inline-block w-4 h-4 mr-1" />
            {dateStr}
          </span>
          <span className="flex items-center">
            <Clock className="inline-block w-4 h-4 mr-1" />
            {timeStr}
          </span>
        </p>
        <p className="flex items-center text-sm gap-x-2 font-bold break-keep">
          <MapPin size={16} className="flex-shrink-0" />
          <span className="w-fit">{location}</span>
        </p>
        <p className="flex items-center text-sm gap-x-2 break-keep">
          <Map size={16} className="flex-shrink-0" />
          <span className="w-fit">{address}</span>
        </p>
      </div>
      <hr />
      <div className="w-full flex flex-col gap-y-2">
        <div className="flex flex-col items-center justify-center w-full bg-gray-50 rounded-md p-2">
          <QRCode value={ticketId} className="w-28 h-28 m-2" />
          <p className="text-xs p-2 text-gray-500">
            입장 시 QR 코드를 보여 주세요
          </p>
        </div>
        <div className="flex flex-col bg-gray-50 rounded-md p-2">
          <p className="text-sm">좌석 번호</p>
          <p className="font-bold">{seat}</p>
        </div>
        <div className="flex flex-col bg-gray-50 rounded-md p-2">
          <p className="text-sm">예매 번호</p>
          <p className="font-bold">{ticketId}</p>
        </div>
      </div>
      <div className="mt-2 bg-flesh-50 rounded-md p-2 text-flesh-800 ">
        <p className="font-bold text-xs mb-2">꼭 확인해 주세요!</p>
        <ul className="text-xs list-disc ml-4 flex flex-col gap-y-2">
          {info.map((text, index) => (
            <li key={index + text}>{text}</li>
          ))}
        </ul>
      </div>
      <div className="flex">
        <img
          className="w-12 ml-auto"
          src="/images/icons/logo-temp.svg"
          alt="SO@"
        />
      </div>
    </article>
  );
}
