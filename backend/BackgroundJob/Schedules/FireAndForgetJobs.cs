using Entities.Dto;
using ScheduleControl.BackgroundJob.Managers.FireAndForgetJobs;
using System;

namespace ScheduleControl.BackgroundJob.Schedules
{
    /// <summary>
    /// Bir kere ve hemen çalışan background job tipidir. 
    /// </summary>
    public static class FireAndForgetJobs
    {
        [Obsolete]
        public static void SendMailJob(MailMessageDto mailMessageDto)
        {
            Hangfire.BackgroundJob.Enqueue<EmailSendingScheduleJobManager>
                (
                 job => job.Process(mailMessageDto)
                 );
        }

    }
}