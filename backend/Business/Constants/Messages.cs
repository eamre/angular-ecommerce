using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace Business.Constants
{
    public static class Messages
    {
        public static string CategoryAdded = "kategori eklendi";
        public static string ProductNameInvalid = "urun ismi geçersiz";
        public static string MaintenanceTime = "bakım yapılıyor";
        public static string ProductsListed = "urun listelendi";
        public static string ProductCountOfCategoryError = "maksimum urun sayısı asıldı";
        public static string ProductExistsName = "Aynı isimden ürün var";
        public static string CategoryLimit = "CategoryLimit";
        public static string AuthorizationDenied="Yetkiniz Yok";

        public static string UserRegistered = "kayıt olundu";
        public static string UserNotFound = "UserNotFound";
        public static string PasswordError = "PasswordError";
        public static string SuccessfulLogin = "SuccessfulLogin";
        public static string UserAlreadyExists = "UserAlreadyExists";
        public static string AccessTokenCreated = "AccessTokenCreated";
    }
}
