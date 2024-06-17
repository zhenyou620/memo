const getMemo = async () => {
  const response = await fetch('api/Memos', {
    method: 'GET',
  });
  const gotMemo = await response.json();
  return gotMemo;
};

export default getMemo;
