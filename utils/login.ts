import { Page } from '@playwright/test';

/**
 * Hàm đăng nhập vào ứng dụng.
 * @param page - Đối tượng page của Playwright.
 * @param username - Tên đăng nhập.
 * @param password - Mật khẩu.
 */
export const login = async (page: Page, username: string, password: string) => {
  // Điều hướng đến trang đăng nhập
  await page.goto('https://hrweb-uat.viec3mien.vn/account/login');
  
  // Điền tài khoản vào trường input
  await page.fill("xpath=//input[@placeholder='Tài khoản *']", username);
  
  // Điền mật khẩu vào trường input
  await page.fill("xpath=//input[@placeholder='Mật khẩu *']", password);
  
  // Nhấn nút đăng nhập
  await page.click("xpath=//button[contains(text(),'Đăng nhập')]");
  
  // Bạn có thể thêm một bước kiểm tra nếu cần
  // Ví dụ kiểm tra xem có hiển thị dashboard hay không sau khi đăng nhập thành công
  // await page.waitForSelector('text=Trang chủ');
};