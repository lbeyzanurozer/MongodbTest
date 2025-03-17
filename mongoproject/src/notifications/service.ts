import Notifications from "./model";



// 1. Tüm bildirimleri getiren fonksiyon
async function getAllNotifications() {
  return await Notifications.find({ deleted: false });
}

// 2. ID'ye göre bir bildirim getiren fonksiyon
async function getNotificationById(id: string) {
  return await Notifications.findById(id);
}

// 3. Yeni bir bildirim ekleyen fonksiyon
async function createNotification(notificationData: { content: string; campaignId: string; }, campaignId: any) {
  const newNotification = new Notifications(notificationData);
  return await newNotification.save();
}

// 4. Bir bildirimi güncelleyen fonksiyon
async function updateNotification(id: string, notificationData: { content: string }) {
  return await Notifications.findByIdAndUpdate(id, notificationData, { new: true });
}

// 5. Bir bildirimi silen fonksiyon
async function deleteNotification(id: string) {
  return await Notifications.findByIdAndDelete(id);
}

export { getAllNotifications, getNotificationById, createNotification, updateNotification, deleteNotification };
