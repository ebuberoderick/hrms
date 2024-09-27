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
    document.getElementById(e).parentElement.childNodes[0].childNodes[1].classList.toggle("rotate-90");
  };


  const checkOpen = () => {
    const page = url.split("/");
    setActive(page[1]);
    if (page.length > 1 && page[1].toLowerCase() === text.toLowerCase().replaceAll(" ", "_").replaceAll("&", "x")) {
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
          className={`flex items-center gap-3 py-1 cursor-pointer px-3 ${active.replaceAll(" ", "_").toLowerCase() === text.replaceAll(" ", "_").toLowerCase()
              ? "text-white bg-hrms_dark_green"
              : "hover:bg-hrms_dark_green hover:bg-opacity-70 hover:text-white"
            }`}
        >
          <div className="text-sm">{icon}</div>
          <div className="capitalize flex-grow">{text}</div>
          <div
            className={`text-2xl transform transition-all duration-300 ${showSub && "rotate-90"
              }`}
          >
            {subMenu && subMenu.length > 0 && (
              <i className={`ri-arrow-right-s-line transform `}></i>
            )}
          </div>
        </div>
      ) : (
        <Link
          href={`/${ text.toLowerCase().replaceAll(" ", "_").replaceAll("&", "x")}`}
        >
          <div
            className={`flex items-center gap-3 py-2 cursor-pointer px-3 ${active.toLowerCase().replaceAll(" ", "_").replaceAll("&", "x") === text.toLowerCase().replaceAll(" ", "_").replaceAll("&", "x")
                ? "text-white bg-hrms_dark_green"
                : "hover:bg-hrms_dark_green hover:bg-opacity-70 hover:text-white"
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
                    className={`flex py-1 items-center gap-3 cursor-pointer ${activeSub.toLowerCase().replaceAll(" ", "_").replaceAll("&", "x") === subText.name.toLowerCase().replaceAll(" ", "_").replaceAll("&", "x")
                        ? "text-bg-hrms_dark_green font-bold"
                        : "hover:text-sm hover:font-bold hover:text-hrms_greenbg-hrms_dark_green"
                      }`}
                  >
                    <div className="capitalize flex-grow">{subText.name}</div>
                    <div className={`text-2xl transform transition-all duration-300  ${activeSub.toLowerCase().replaceAll(" ", "_").replaceAll("&", "x") === subText.name.toLowerCase().replaceAll(" ", "_").replaceAll("&", "x") && "rotate-90"} `}>
                      <i className="ri-arrow-right-s-line"></i>
                    </div>
                  </div>
                  <div className={`pl-6 space-y-2 ${activeSub.toLowerCase().replaceAll(" ", "_").replaceAll("&", "x") === subText.name.toLowerCase().replaceAll(" ", "_").replaceAll("&", "x") ? "":"hidden"} `}  id={subText.name}>
                    {subText.option.map((e, i) => (
                      <div key={e + i}>
                        <Link href={`/${text.toLowerCase()}/${subText.name.toLowerCase().replaceAll(" ", "_").replaceAll("&", "x")}/${e.toLowerCase().replaceAll(" ", "_").replaceAll("&", "x")}`}>
                          <div className="hover:text-bg-hrms_dark_green py-1">{e}</div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={`/${text.toLowerCase()
                    .replaceAll(" ", "_")
                    .replaceAll("&", "x")}/${subText.name.toLowerCase()
                      .replaceAll(" ", "_")
                      .replaceAll("&", "x")}`}
                >
                  <div
                    className={`flex py-2 items-center gap-3 ${activeSub.toLowerCase().replaceAll(" ", "_").replaceAll("&", "x") === subText.name.toLowerCase().replaceAll(" ", "_").replaceAll("&", "x")
                        ? "text-hrms_greenbg-hrms_dark_green font-bold"
                        : "hover:text-sm hover:font-bold hover:text-hrms_greenbg-hrms_dark_green"
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
