import { User } from "src/app/shared/models/user.model";
import { ChatPreferences } from "src/app/shared/models/chat-preferences.model";

export const USERS: User[] = [
    new User(4, 'John', 'https://bootdey.com/img/Content/avatar/avatar1.png', new ChatPreferences("#1D1F1E", "Hi! Any questions? Let me know how I can help")),
    new User(2, 'Clarke', 'https://bootdey.com/img/Content/avatar/avatar1.png', new ChatPreferences("#6050dc", "Hi! Whatsup?")),
    new User(3, 'Ethan', 'https://bootdey.com/img/Content/avatar/avatar3.png', new ChatPreferences("#6050dc", "Hey there, any questions? Let me know how I can help")),
    new User(8, 'Max', 'https://bootdey.com/img/Content/avatar/avatar1.png', new ChatPreferences("#00AAB4", "Hey there, any questions? Let me know how I can help")),
    new User(5, 'Liam', 'https://bootdey.com/img/Content/avatar/avatar1.png', new ChatPreferences("#9290A1", "Hey there, any questions? Let me know how I can help")),
    new User(6, 'Lindsey', 'https://bootdey.com/img/Content/avatar/avatar1.png', new ChatPreferences("#37D1DB", "Hey there, any questions? Let me know how I can help")),
    new User(7, 'Mary', 'https://bootdey.com/img/Content/avatar/avatar1.png', new ChatPreferences("#D3C445", "Hey there, any questions? Let me know how I can help")),
    new User(1, 'Jason', 'https://bootdey.com/img/Content/avatar/avatar1.png', new ChatPreferences("#FBBEBB", "Hey there, any questions? Let me know how I can help")),
    new User(9, 'Paul', 'https://bootdey.com/img/Content/avatar/avatar1.png', new ChatPreferences("#08DFB4", "Hey there, any questions? Let me know how I can help")),
    new User(10, 'Tom', 'https://bootdey.com/img/Content/avatar/avatar1.png', new ChatPreferences("#FF69B4", "Hey there, any questions? Let me know how I can help")),
    new User(11, "Vanessa", 'https://bootdey.com/img/Content/avatar/avatar1.png', new ChatPreferences("#FF69B4", "Hey there, any questions? Let me know how I can help"))
];