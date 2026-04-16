using System.ComponentModel.DataAnnotations;

namespace MvcNews.Models;

public class NewsItem
{
        private int _id;
        
        private DateTime _timeStamp;
        
        private string _text = string.Empty;
        
        public int Id
        {
                get => _id;
                set => _id = value;
        }
        
        [DataType(DataType.Date)]
        public DateTime TimeStamp
        {
                get => _timeStamp;
                set => _timeStamp = value;
        }

        [Required]
        [StringLength(140, MinimumLength = 5, ErrorMessage = "too short")]
        public string Text
        {
                get => _text;
                set => _text = value ?? throw new ArgumentNullException(nameof(value));
        }
        
        [Timestamp]
        public  byte[]? RowVersion { get; set; }
        

        
}