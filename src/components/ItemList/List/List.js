import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ListWeb from "../../../common/ListWeb/index";

export default function ItemList() {
  // const date = new Date().toLocaleTimeString();

  const [size, setSize] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  });
  const updateSize = () =>
    setSize({
      w: window.innerWidth,
      h: window.innerHeight,
    });

  useEffect(() => {
    window.onresize = updateSize;
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  // console.log("funkcja:", size.w);

  if (size.w < 426) {
    return <ListWeb isListMobile={true} />;
  }

  return <ListWeb isListWeb={true} />;
}
