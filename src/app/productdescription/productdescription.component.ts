import { Component, OnInit } from '@angular/core';
import {  AfterViewInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';

 
@Component({
  selector: 'app-productdescription',
  templateUrl: './productdescription.component.html',
  styleUrls: ['./productdescription.component.css']
})
export class ProductdescriptionComponent implements OnInit {
  // product;
  public prd: any = null; 
  public product: any [];  
  constructor(
    public route: ActivatedRoute
    ) { }
   
  ngOnInit() {
      this.product = [{  
      productname: 'lord budhha',  
      productsrc: 'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/23093/35453/1500201863121_unnamed__1__2__23685.1500532407.jpg?c=2&imbypass=on', 
      productdescription:'According to Fengh Shui and Vastu, keeping paintings of Lord Buddha increase the flow of Chi and bring prosperity and great fortune. ... Buddha Paintings are also a symbol of innocence and bliss. Paintings of Lord Buddha is also considered as a shield against sorrow and negative energy', 
      productprize:'$1,11,000',
      },  
      {  
      productname: 'modern art',  
      productsrc: 'https://4.imimg.com/data4/FH/SR/ANDROID-60268219/product-500x500.jpeg', 
      productdescription:'Painting, the expression of ideas and emotions, with the creation of certain aesthetic qualities, in a two-dimensional visual language. The elements of this language—its shapes, lines, colours, tones, and textures—are used in various ways to produce sensations of volume, space, movement, and light on a flat surface. These elements are combined into expressive patterns in order to represent real or supernatural phenomena, to interpret a narrative theme, or to create wholly abstract visual relationships.', 
      productprize:'$24,000',
      },  
      {  
      productname: 'silhouette',  
      productsrc: 'https://cdn.clipart.email/30124f0e541ebc9dd0039417818681e3_silhouette-painting-artists_482-596.jpeg',  
      productdescription:'Abstract art utilizes pure color, shape, and form to express its meaning, without getting bogged down in the storylines carried by objects and scenery. As such, abstract art can touch the emotions in a fresh, raw and powerfully direct way. ... For example, some artists use many colors, while others use minimal color.',
      productprize:'$74,000',
      },  
    ];  


    this.route.paramMap.subscribe(params => {
      //this.prd = this.product[+params.get('productId')];
      this.prd = this.product[params.get('id')]; 
    });
  }
}



//   ngOnInit() {  
//   this.product = [{  
//    productname: 'nokia5.1,',  
//    productdescription: '3000 mah',  
//    productdescription01: '4 GB RAM 64 GB Internal storage',  
//    productcost: '12000',  
//    productsrc: 'assets/images/nokia5.1.jpg',  
//    },  
// ];  
//   this.activatedRoute.params.subscribe(param => {  
//    // slint:disable-next-line: no-string-literal  
//    this.productid = this.product[param['id']];  
//    });  
//   }  

//}