import { Request, Response } from 'express';
import * as notificationService from "./service";

// 1. Tüm bildirimleri getiren controller fonksiyonu
export const getAllNotifications = async (req: Request, res: Response): Promise<Response> => {
  try {
    const notifications = await notificationService.getAllNotifications();
    return res.status(200).json({ notifications });
  } catch (err) {
    return res.status(500).json({
      message: "Tüm bildirimler alınırken bir hata oluştu",
      error: err,
    });
  }
};

// 2. Tek bir bildirimi getiren controller fonksiyonu (ID ile)
export const getNotificationById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const notification = await notificationService.getNotificationById(req.params.id);
    if (!notification) {
      return res.status(404).json({ message: "Bildirim bulunamadı" });
    }
    return res.status(200).json({ notification });
  } catch (err) {
    return res.status(500).json({
      message: "Bildirim alınırken bir hata oluştu",
      error: err,
    });
  }
};

// 3. Yeni bir bildirim ekleyen controller fonksiyonu
export const createNotification = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { content, campaignId } = req.body;
    const newNotification = await notificationService.createNotification(content, campaignId);
    return res.status(201).json({
      message: "Yeni bildirim başarıyla oluşturuldu",
      notification: newNotification,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Yeni bildirim oluşturulurken bir hata oluştu",
      error: err,
    });
  }
};

// 4. Bir bildirimi güncelleyen controller fonksiyonu (ID ile)
export const updateNotification = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { content } = req.body;
    const updatedNotification = await notificationService.updateNotification(req.params.id, content);
    if (!updatedNotification) {
      return res.status(404).json({ message: "Bildirim bulunamadı" });
    }
    return res.status(200).json({
      message: "Bildirim başarıyla güncellendi",
      notification: updatedNotification,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Bildirim güncellenirken bir hata oluştu",
      error: err,
    });
  }
};

// 5. Bir bildirimi silen controller fonksiyonu (ID ile)
export const deleteNotification = async (req: Request, res: Response): Promise<Response> => {
  try {
    const deletedNotification = await notificationService.deleteNotification(req.params.id);
    if (!deletedNotification) {
      return res.status(404).json({ message: "Bildirim bulunamadı" });
    }
    return res.status(200).json({
      message: "Bildirim başarıyla silindi",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Bildirim silinirken bir hata oluştu",
      error: err,
    });
  }
};
