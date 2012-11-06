(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,FSEO,Details,Client,WebSharper,Html,Default,List,T,Operators,HTML5,Remoting,Seq,Utilities,Client1,Concurrency,jQuery,UrlForm,Client2,EventsPervasives,window,alert,Formlet,Formlet1,Data,Arrays;
 Runtime.Define(Global,{
  FSEO:{
   Details:{
    Client:{
     DetailsViewer:Runtime.Class({
      get_Body:function()
      {
       return Client.detailsSection(this.id);
      }
     }),
     detailsSection:function(id)
     {
      var tabsDiv,x,_this,x1,f,f1;
      tabsDiv=Default.Div(Runtime.New(T,{
       $:0
      }));
      x=Operators.add((_this=HTML5.Tags(),(x1=List.ofArray([Default.Attr().Class("tab-pane active"),Default.Id("details")]),_this.NewTag("section",x1))),List.ofArray([Client.makeDiv("URL","url"),Default.Hr(Runtime.New(T,{
       $:0
      })),Client.makeDiv("Size","size"),Default.Hr(Runtime.New(T,{
       $:0
      })),Client.makeDiv("Server","server"),Default.Hr(Runtime.New(T,{
       $:0
      })),Client.makeDiv("Elapsed Time","elapsedTime"),Default.Hr(Runtime.New(T,{
       $:0
      })),Client.makeDiv("Title","title"),Client.makeDiv("Length","titleLength"),Default.Hr(Runtime.New(T,{
       $:0
      })),Client.makeDiv("Description","description"),Client.makeDiv("Length","descriptionLength"),Default.Hr(Runtime.New(T,{
       $:0
      })),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("row-fluid")])),List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().Class("span4")])),List.ofArray([Operators.add(Default.H4(List.ofArray([Default.Attr().Class("h4")])),List.ofArray([Default.Text("Headings")]))])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("span8")])),List.ofArray([tabsDiv]))]))]));
      f=(f1=function()
      {
       var x2,f2,f6;
       x2=(f2=function()
       {
        var x3,f3;
        x3=Remoting.Async("Website:1",[id]);
        f3=function(_arg11)
        {
         var x4,f4,action,tabs;
         x4=List.ofArray([["#url",_arg11.RequestUri],["#size",_arg11.Size],["#server",_arg11.Server],["#elapsedTime",_arg11.ElapsedTime],["#title",_arg11.Title],["#titleLength",_arg11.TitleLength],["#description",_arg11.Description],["#descriptionLength",_arg11.DescriptionLength]]);
         f4=(action=Runtime.Tupled(function(x5)
         {
          var arg1,arg2,f5;
          arg1=x5[0];
          arg2=x5[1];
          f5=function(selector)
          {
           return function(txt)
           {
            return Client.setPText(selector,txt);
           };
          };
          return(f5(arg1))(arg2);
         }),function(list)
         {
          return Seq.iter(action,list);
         });
         f4(x4);
         tabs=Client1.makeTabsDiv(_arg11.Headings);
         tabsDiv.AppendI(tabs);
         return Concurrency.Return(null);
        };
        return Concurrency.Bind(x3,f3);
       },Concurrency.Delay(f2));
       f6=function(arg00)
       {
        var t;
        t={
         $:0
        };
        return Concurrency.Start(arg00);
       };
       return f6(x2);
      },function(w)
      {
       return Operators.OnAfterRender(f1,w);
      });
      f(x);
      return x;
     },
     makeDiv:function(txt,id)
     {
      return Operators.add(Default.Div(List.ofArray([Default.Attr().Class("row-fluid")])),List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().Class("span4")])),List.ofArray([Operators.add(Default.H4(List.ofArray([Default.Attr().Class("h4")])),List.ofArray([Default.Text(txt)]))])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("span8")])),List.ofArray([Default.P(List.ofArray([Default.Id(id)]))]))]));
     },
     setPText:function(selector,txt)
     {
      return jQuery(selector).text(txt);
     }
    }
   },
   UrlForm:{
    Client:{
     FormViewer:Runtime.Class({
      get_Body:function()
      {
       return Client2.form();
      }
     }),
     form:function()
     {
      var legend,x,_this,label,x1,_this1,urlInput,x2,_this2,_this3,_this4,f,x3,submitBtn,x4,_this5,f1,x5,legendFormlet,labelFormlet,urlInputFormlet,submitBtnFormlet,form,x9;
      legend=(x=List.ofArray([Default.Text("Enter the URL you want to analyze.")]),(_this=Default.Tags(),_this.NewTag("legend",x)));
      label=(x1=List.ofArray([Default.Text("URL")]),(_this1=Default.Tags(),_this1.NewTag("label",x1)));
      urlInput=(x2=Default.Input(List.ofArray([Default.Attr().Class("input-xxlarge"),(_this2=Default.Attr(),_this2.NewAttr("type","text")),(_this3=HTML5.Attr(),_this3.NewAttr("placeholder","http://www.example.com/")),(_this4=HTML5.Attr(),_this4.NewAttr("autofocus","autofocus"))])),(f=(x3=function()
      {
       return function(key)
       {
        var _key_;
        _key_=key.KeyCode;
        if(_key_===13)
         {
          return jQuery("#submitButton").click();
         }
        else
         {
          return null;
         }
       };
      },function(arg10)
      {
       return EventsPervasives.Events().OnKeyDown(x3,arg10);
      }),(f(x2),x2)));
      submitBtn=(x4=Default.Button(List.ofArray([Default.Id("submitButton"),Default.Attr().Class("btn btn-primary"),Default.Text("Submit"),(_this5=Default.Attr(),_this5.NewAttr("type","button"))])),(f1=(x5=function(x6)
      {
       return function()
       {
        var x7,f2,f4;
        x7=(f2=function()
        {
         var objectArg,arg00,x8,f3;
         objectArg=x6["HtmlProvider@32"];
         (arg00=x6.Body,function(arg10)
         {
          return objectArg.AddClass(arg00,arg10);
         })("disabled");
         x8=Remoting.Async("Website:0",[urlInput.get_Value()]);
         f3=function(_arg1)
         {
          var id,objectArg1,arg001;
          if(_arg1.$==1)
           {
            id=_arg1.$0;
            window.location.href="/Report/"+id;
            return Concurrency.Return(null);
           }
          else
           {
            alert("Requesting the specified URL failed.");
            objectArg1=x6["HtmlProvider@32"];
            (arg001=x6.Body,function(arg10)
            {
             return objectArg1.RemoveClass(arg001,arg10);
            })("disabled");
            return Concurrency.Return(null);
           }
         };
         return Concurrency.Bind(x8,f3);
        },Concurrency.Delay(f2));
        f4=function(arg00)
        {
         var t;
         t={
          $:0
         };
         return Concurrency.Start(arg00);
        };
        return f4(x7);
       };
      },function(arg10)
      {
       return EventsPervasives.Events().OnClick(x5,arg10);
      }),(f1(x4),x4)));
      legendFormlet=Formlet1.OfElement(function()
      {
       return legend;
      });
      labelFormlet=Formlet1.OfElement(function()
      {
       return label;
      });
      urlInputFormlet=Formlet1.OfElement(function()
      {
       return urlInput;
      });
      submitBtnFormlet=Formlet1.OfElement(function()
      {
       return submitBtn;
      });
      form=Data.$(Data.$(Data.$(Data.$((x9=function()
      {
       return function()
       {
        return function()
        {
         return function()
         {
          return null;
         };
        };
       };
      },Formlet1.Return(x9)),legendFormlet),labelFormlet),urlInputFormlet),submitBtnFormlet);
      return Formlet1.Run(function()
      {
       return null;
      },form);
     }
    }
   },
   Utilities:{
    Client:{
     makeDiv:function(idx,x,y)
     {
      if(idx===0)
       {
        return Operators.add(Default.Div(List.ofArray([Default.Attr().Class("tab-pane active"),Default.Id(x)])),List.ofArray([Client1.makeList(y)]));
       }
      else
       {
        return Operators.add(Default.Div(List.ofArray([Default.Attr().Class("tab-pane"),Default.Id(x)])),List.ofArray([Client1.makeList(y)]));
       }
     },
     makeLi:function(idx,id)
     {
      var _this,arg00,_this1,arg001;
      if(idx===0)
       {
        return Operators.add(Default.LI(List.ofArray([Default.Attr().Class("active")])),List.ofArray([Operators.add(Default.A(List.ofArray([Default.HRef("#"+id),(_this=HTML5.Attr(),(arg00="data-"+"toggle",_this.NewAttr(arg00,"tab")))])),List.ofArray([Default.Text(id)]))]));
       }
      else
       {
        return Default.LI(List.ofArray([Operators.add(Default.A(List.ofArray([Default.HRef("#"+id),(_this1=HTML5.Attr(),(arg001="data-"+"toggle",_this1.NewAttr(arg001,"tab")))])),List.ofArray([Default.Text(id)]))]));
       }
     },
     makeList:function(lst)
     {
      return Default.UL(Seq.toList(Seq.delay(function()
      {
       return Seq.map(function(x)
       {
        return Default.LI(List.ofArray([Default.Text(x)]));
       },lst);
      })));
     },
     makeTabsDiv:function(tabsContent)
     {
      var lis,x,f,mapping,f1,mapping1,divs,f2,mapping2;
      lis=(x=(f=(mapping=Runtime.Tupled(function(tuple)
      {
       return tuple[0];
      }),function(array)
      {
       return Arrays.map(mapping,array);
      }),f(tabsContent)),(f1=(mapping1=function(idx)
      {
       return function(x1)
       {
        return Client1.makeLi(idx,x1);
       };
      },function(array)
      {
       return Arrays.mapi(mapping1,array);
      }),f1(x)));
      divs=(f2=(mapping2=function(idx)
      {
       return Runtime.Tupled(function(tupledArg)
       {
        var x1,y;
        x1=tupledArg[0];
        y=tupledArg[1];
        return Client1.makeDiv(idx,x1,y);
       });
      },function(array)
      {
       return Arrays.mapi(mapping2,array);
      }),f2(tabsContent));
      return Operators.add(Default.Div(List.ofArray([Default.Attr().Class("tabbable")])),List.ofArray([Operators.add(Default.UL(List.ofArray([Default.Attr().Class("nav nav-tabs")])),lis),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("tab-content")])),divs)]));
     }
    }
   }
  }
 });
 Runtime.OnInit(function()
 {
  FSEO=Runtime.Safe(Global.FSEO);
  Details=Runtime.Safe(FSEO.Details);
  Client=Runtime.Safe(Details.Client);
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Html=Runtime.Safe(WebSharper.Html);
  Default=Runtime.Safe(Html.Default);
  List=Runtime.Safe(WebSharper.List);
  T=Runtime.Safe(List.T);
  Operators=Runtime.Safe(Html.Operators);
  HTML5=Runtime.Safe(Default.HTML5);
  Remoting=Runtime.Safe(WebSharper.Remoting);
  Seq=Runtime.Safe(WebSharper.Seq);
  Utilities=Runtime.Safe(FSEO.Utilities);
  Client1=Runtime.Safe(Utilities.Client);
  Concurrency=Runtime.Safe(WebSharper.Concurrency);
  jQuery=Runtime.Safe(Global.jQuery);
  UrlForm=Runtime.Safe(FSEO.UrlForm);
  Client2=Runtime.Safe(UrlForm.Client);
  EventsPervasives=Runtime.Safe(Html.EventsPervasives);
  window=Runtime.Safe(Global.window);
  alert=Runtime.Safe(Global.alert);
  Formlet=Runtime.Safe(WebSharper.Formlet);
  Formlet1=Runtime.Safe(Formlet.Formlet);
  Data=Runtime.Safe(Formlet.Data);
  return Arrays=Runtime.Safe(WebSharper.Arrays);
 });
 Runtime.OnLoad(function()
 {
 });
}());