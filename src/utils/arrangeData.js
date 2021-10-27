export const arrangeData = usersData => {
  return new Promise((resolve, reject) => {
    try {
      const result = usersData.data.map((value, index) => {
        const divider = Math.floor(usersData.data.length / 2);

        if (divider < index) {
          return {
            title: 'Recent Updates',
            data: value,
          };
        } else {
          return {
            title: 'Viewed Updates',
            data: value,
          };
        }
      });
      const finalResult = [
        {title: 'Recent Updates', data: []},
        {title: 'Viewed Updates', data: []},
      ];
      result.forEach(value => {
        if (value.title == 'Recent Updates') {
          finalResult[0].data.push(value.data);
        } else finalResult[1].data.push(value.data);
      });

      resolve(finalResult);
    } catch (error) {
      reject(error);
    }
  });
};
