const serverStore = require('../../ServerStore');

const updateRooms = (toSpecifiedSocketId = null) => {
  const io= serverStore.getSocketServerInstance();
  const activeRooms = serverStore.getActiveRooms();
  console.log(activeRooms.length)
  if (toSpecifiedSocketId) {
    io.to(toSpecifiedSocketId).emit('active-rooms', {
      activeRooms,
    });
  } else {
    io.emit('active-rooms', {
      activeRooms,
    });
  }
};

module.exports = {
  updateRooms,
};
