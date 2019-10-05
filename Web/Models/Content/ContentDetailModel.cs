using System;

namespace bubbl.Web.Models.Content
{
    public class ContentDetailModel
    {
        public int Id { get; set; }

        public DateTime UploadDate { get; set; }

        public string Type { get; set; }

        public string Location { get; set; }

        public string Description { get; set; }

        public string ImageUrl { get; set; }

        public int UserId { get; set; }

    }
}
