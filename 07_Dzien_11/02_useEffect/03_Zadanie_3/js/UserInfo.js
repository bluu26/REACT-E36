import React, {useEffect, useState} from 'react';

const UserInfo = () => {
        const [name, setName] = useState('Bar Gar')

    useEffect(() => {
        setTimeout(() => {
            setName('wohoho')
        }, 2000);
    }, []);

  return (
    <div>
      <p>
          {name}
      </p>
    </div>
  );
}

export default UserInfo;