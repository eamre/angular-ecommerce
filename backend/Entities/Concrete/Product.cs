using Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Concrete
{
    public class Product : IEntity
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public int CategoryId { get; set; }
        public int BrandId { get; set; }
        public int ColorId { get; set; }
        public int KullanımDurumuId { get; set; }
        public decimal Price { get; set; }
        public bool OfferOption { get; set; }
        public bool IsSold { get; set; }
        public string imgUrl { get; set; }

    }
}
