using Business.Abstract;
using Entities.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class MailManager : IMailService
    {
        private readonly IUserService _userService;

        public MailManager( IUserService userService)
        {
           
            _userService = userService;
        }

        public async Task SendUserRegisterMailAsync(int userId)
        {
            using var client = CreateSmtpClient();
            var userInfo = _userService.GetByUserId(userId);

            MailMessageDto mailMessageDto = new MailMessageDto
            {
                Body = "Merhaba hoş geldiniz  ",
                     
                To = userInfo.Email,
                Subject = "Kullanıcı Register Islemi Kontrol",
                From = "forstajodev@gmail.com"
            };
            MailMessage mailMessage = mailMessageDto.GetMailMessage();
            mailMessage.IsBodyHtml = true;
            await client.SendMailAsync(mailMessage);
        }

        private SmtpClient CreateSmtpClient()
        {
            SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587);
            smtp.Credentials = new NetworkCredential("forstajodev@gmail.com","");
            smtp.EnableSsl = true;
            //smtp.UseDefaultCredentials = false;
            return smtp;
        }

        public async Task SendMailAsync(MailMessageDto mailMessageDto)
        {
            MailMessage mailMessage = mailMessageDto.GetMailMessage();
            mailMessage.From = new MailAddress("forstajodev@gmail.com");

            using var client = CreateSmtpClient();
            await client.SendMailAsync(mailMessage);
        }
    }
}
