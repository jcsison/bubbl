using System;

namespace bubbl.Web.Models.Content
{
    public class ContentModel
    {
        public int Id { get; set; }

        public string Description { get; set; }

        public string ImageUrl { get; set; }

        public string Location { get; set; }

        public string Tags { get; set; }

        public string Title { get; set; }

        public string Type { get; set; }

        public DateTime UploadDate { get; set; }

        public int UserId { get; set; }
    }
}
