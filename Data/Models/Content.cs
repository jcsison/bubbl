using System;
using System.ComponentModel.DataAnnotations;

namespace bubbl.Data.Models
{
    public class Content
    {
        [Required] public int Id { get; set; }

        [Required] public DateTime UploadDate { get; set; }

        [Required] public string Type { get; set; }

        public string Location { get; set; }

        public string Description { get; set; }
    }
}
