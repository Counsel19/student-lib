import React from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RoomIcon from "@mui/icons-material/Room";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const Style = "text-white text-xs";

const arrayIcon = [
  <PeopleAltIcon fontSize="small" className={Style} />,
  <RoomIcon fontSize="small" className={Style} />,
  <CalendarTodayIcon fontSize="small" className={Style} />,
];
const Color = [
  "from-indigo-500 to-blue-400",
  "from-blue-400 to-blue-300",
  "from-green-500 to-green-400",
  "from-yellow-600 to-yellow-500",
];

const Card = (props) => {
  return (
    <div
      className={`cursor-pointer transition delay-100 w-6/12  px-5 py-3 shadow-md  border rounded-xl bg-gradient-to-r ${
        Color[props.icon]
      }`}
    >
      <div className="flex justify-between">
        <div></div>
        <div className=" w-10  h-10 flex items-center justify-center  bg-gray-400 rounded-xl m-1  bg-opacity-30">
          {arrayIcon[props.icon]}
        </div>
      </div>
      <p className="text-gray-200 text-base  ">{props.title}(s)</p>
      <p className="text-gray-50 text-lg  font-semibold  ">{props.total}</p>
    </div>
  );
};

export default Card;
