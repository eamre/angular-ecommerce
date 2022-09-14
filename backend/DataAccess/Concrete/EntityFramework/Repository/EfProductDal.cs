using DataAccess.Abstract;
using Entities.Concrete;
using Entities.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete.EntityFramework.Repository
{
    public class EfProductDal : EfGenericRepository<Product, DatabaseContext>, IProductDal
    {
       public List<ProductCategoryDto> GetProductCategories(int catId)
        {
            using(DatabaseContext context=new DatabaseContext())
            {
                var result = from p in context.Products
                             join c in context.Categories
                             on p.CategoryId equals c.Id
                             where c.Id == catId
                             select new ProductCategoryDto
                             {
                                 ProductId = p.Id,
                                 ProductName = p.ProductName,
                                 CategoryName = c.CategoryName,
                                 Price = p.Price,
                                 imgUrl=p.imgUrl
                             };
                            return result.ToList();
            }
        }
    }
}
