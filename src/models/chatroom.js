class Chatroom {
  constructor(id, title, image, users, chatID, type) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.users = users;
    this.chatID = chatID;
    this.type = type; //group or individual
  }
}

export default Chatroom;

//this.chatID = chatID; //[{userName: 'Tom', userID: '#123', attachment: null, text: 'Hello!'}]
