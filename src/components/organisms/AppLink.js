"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function AppLink({ text, icon, subMenu }) {
  const [showSub, setShowSub] = useState(false);
  const [active, setActive] = useState("");
  const [activeSub, setActiveSub] = useState("");
  const url = usePathname();
  const openSubMenu = () => {
    setShowSub(!showSub);
  };

  const toggleSibling = (e) => {
    document.getElementById(e).classList.toggle("hidden");
    console.log(document.getElementById(e).parentElement());
  };

  const checkOpen = () => {
    const page = url.split("/");
    setActive(page[1]);
    if (page.length > 1 && page[1] === text) {
      setActiveSub(page[2]);
      openSubMenu();
    }
  };

  useEffect(() => {
    checkOpen();
  }, []);

  return (
    <div className="text-sm">
      {subMenu && subMenu.length > 0 ? (
        <div
          onClick={() => openSubMenu()}
          className={`flex items-center gap-3 py-1 rounded-r-full text-gray-500 cursor-pointer px-3 ${
            active === text
              ? "text-white bg-hrms_blue rounded-r-full"
              : "hover:bg-hrms_blue hover:bg-opacity-70 hover:text-white"
          }`}
        >
          <div className="text-sm">{icon}</div>
          <div className="capitalize flex-grow">{text}</div>
          <div
            className={`text-2xl transform transition-all duration-300 ${
              showSub && "rotate-90"
            }`}
          >
            {subMenu && subMenu.length > 0 && (
              <i className={`ri-arrow-right-s-line transform `}></i>
            )}
          </div>
        </div>
      ) : (
        <Link
          href={`/${
            text === "dashboard"
              ? ""
              : text.replaceAll(" ", "_").replaceAll("&", "x").toLowerCase()
          }`}
        >
          <div
            className={`flex items-center gap-3 py-2 rounded-r-full text-gray-500 cursor-pointer px-3 ${
              active === text || (active === "" && text === "dashboard")
                ? "text-white bg-hrms_blue rounded-r-full"
                : "hover:bg-hrms_blue hover:bg-opacity-70 hover:text-white"
            }`}
          >
            <div className="text-sm">{icon}</div>
            <div className=" capitalize flex-grow">{text}</div>
          </div>
        </Link>
      )}
      {subMenu && showSub && subMenu.length > 0 && (
        <div className="pl-6 text-xs transition-all duration-300">
          {subMenu.map((subText, index) => (
            <div key={index}>
              {subText.extra ? (
                <div>
                  <div
                    onClick={() => toggleSibling(subText.name)}
                    className={`flex py-1 items-center gap-3 text-gray-500 cursor-pointer ${
                      activeSub === subText.name
                        ? "text-bg-hrms_blue font-bold"
                        : "hover:text-sm hover:font-bold hover:text-bg-hrms_blue"
                    }`}
                  >
                    <div className="capitalize flex-grow">{subText.name}</div>
                    <div className="text-2xl transform transition-all duration-300">
                      <i className="ri-arrow-right-s-line"></i>
                    </div>
                  </div>
                  <div className="pl-6 space-y-2 hidden" id={subText.name}>
                    {subText.option.map((e, i) => (
                      <div key={e + i}>
                        <Link href={`/${text}/${subText.name}/${e}`}>
                          <div className="hover:text-bg-hrms_blue py-1">
                            {e}
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={`/${text
                    .replaceAll(" ", "_")
                    .replaceAll("&", "x")}/${subText.name
                    .replaceAll(" ", "_")
                    .replaceAll("&", "x")}`}
                >
                  <div
                    className={`flex py-2 items-center gap-3 text-gray-500 ${
                      activeSub === subText.name
                        ? "text-[#57aaa5] font-bold"
                        : "hover:text-sm hover:font-bold hover:text-bg-hrms_blue"
                    }`}
                  >
                    <div className="capitalize flex-grow">{subText.name}</div>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AppLink;
