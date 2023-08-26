import { useRef } from "react";
import { Button } from "../components/common/Button";
import { useState } from "react";

import { Tree } from "../components/common";

const ReactTypeOfWork = {
  0: "FunctionComponent",

  1: "ClassComponent",

  2: "IndeterminateComponent",

  3: "HostRoot",

  4: "HostPortal",

  // 5: "HTML_Element",

  6: "HostText",

  7: "Fragment",

  8: "Mode",

  9: "ContextConsumer",

  10: "ContextProvider",

  11: "ForwardRef",

  12: "Profiler",

  13: "SuspenseComponent",

  14: "MemoComponent",

  15: "SimpleMemoComponent",

  16: "LazyComponent",

  17: "IncompleteClassComponent",

  "-1": "YieldComponent",
};




function Home() {
  const [trees, setTrees] = useState([]);
  const ref = useRef();

  const getFiberFromDOM = (dom) => {
    let key = Object.keys(dom).find((key) => key.startsWith("__reactFiber$"));

    if (key) return dom[key];
  };

  const gatherTreeData = () => {
    const iframeDocument = ref.current?.contentWindow?.document?.body;
    console.dir(iframeDocument);
    const getChildElements = (element) => {
      return Array.from(element.children).map((childElement) => {
        const fiber = getFiberFromDOM(childElement);

        const objectElement = {
          name: childElement.localName,
          children: getChildElements(childElement),
          type: ReactTypeOfWork[fiber?.return?.tag],
        };
        return objectElement;
      });
    };
    setTrees(getChildElements(iframeDocument));
  };

  return (
    <div className="w-full min-h-screen flex gap-10">
      <aside className="w-96 bg-slate-900 flex flex-col  py-5 px-2 ">
        {trees?.map((item) => (
          <Tree key={item.name} {...item} />
        ))}
        <Button onClick={gatherTreeData} title={"ok"} />
      </aside>
      <iframe
        ref={ref}
        className="flex flex-1 m-10 rounded-2xl shadow-lg"
        src="/template"
      />
    </div>
  );
}

export default Home;
