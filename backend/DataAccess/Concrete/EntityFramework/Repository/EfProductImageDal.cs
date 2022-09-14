using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete.EntityFramework.Repository
{
    public class EfProductImageDal : EfGenericRepository<ProductImage, DatabaseContext>, IProductImageDal
    {
    }
}
