import {useEffect, useState} from 'react';

/**
 * Include dynamic script
 *
 * @param {Object} args
 * @return {Object}
 */
const useDynamicScript = (args) => {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const {url} = args;

    if (!url) {
      return;
    }

    const element = document.createElement('script');

    element.src = `${url}?${Date.now()}`;
    element.type = 'text/javascript';
    element.async = true;

    setReady(false);
    setFailed(false);

    element.onload = () => {
      // console.log(`Dynamic Script Loaded: ${url}`);
      setReady(true);
    };

    element.onerror = () => {
      // console.error(`Dynamic Script Error: ${url}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      // console.log(`Dynamic Script Removed: ${url}`);
      document.head.removeChild(element);
    };
  }, [args.url]);

  return {
    failed,
    ready,
  };
};

export default useDynamicScript;
