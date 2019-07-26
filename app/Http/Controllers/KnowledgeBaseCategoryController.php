<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\KnowledgeBaseCategory;
use App\KnowledgeBaseItem;
use DB;
use App\Http\Resources\KnowledgeBaseCategoryResource;
use App\Http\Resources\KnowledgeBaseItemResource;
use Image;
use File;

class KnowledgeBaseCategoryController extends Controller
{
    public function getKnowledge() {
        $knows = KnowledgeBaseCategory::select('*')->where('child_id',null)->get();

       return KnowledgeBaseCategoryResource::collection($knows);
    }

    public function addKnowledge(Request $request) {
        $data = $request->all();
        $data['photo'] = $this->upload_image($request);       

        $know = KnowledgeBaseCategory::create($data);

        return new KnowledgeBaseCategoryResource($know);
    }

    private function upload_image($request) {
        $exploded = explode(',',$request->photo);
        $decoded = base64_decode($exploded[1]);

        if(str_contains($exploded[0],'jpeg')) {
            $extension = 'jpeg';
        }
        if(str_contains($exploded[0],'jpg')) {
            $extension = 'jpg';
        }
        if(str_contains($exploded[0],'png')) {
            $extension = 'png';
        }

        $filename = str_random(). '.'.$extension;
        
        $img = Image::make($request->photo);

        $path = 'uploads/knowledgeBase/';
        
        if(!file_exists(public_path().'/'.$path)) {
            File::makeDirectory($path,0755,true);
            }

            $img->save(public_path('uploads/knowledgeBase/'.$filename));
            
                    $filepath = '/uploads/knowledgeBase/'.$filename;
            
                    return $filepath;

    }

    public function getCategories(Request $request) {
        $cat = KnowledgeBaseCategory::select('*')->where('child_id',$request->input('id'))->get();
        $know = KnowledgeBaseCategory::findOrFail($request->input('id'));

        return [KnowledgeBaseCategoryResource::collection($cat),new KnowledgeBaseCategoryResource($know)];
    }

    public function addCategory(Request $request) {
        $cat = new KnowledgeBaseCategory;

        $cat->child_id = $request->input('child_id');
        $cat->title_ru = $request->input('title_ru');
        $cat->title_uz = $request->input('title_uz');
        $cat->title_uz2 = $request->input('title_uz2');

        $cat->save();

        return new KnowledgeBaseCategoryResource($cat);
    }

    public function updateKnow(Request $request) {
        // return $request->all();
        $data = $request->all();
        if($data['photo']) {
            $data['photo'] = $this->upload_image($request);
        }
        $know = KnowledgeBaseCategory::findOrFail($data['id']);
         $know->update($data);

        return new KnowledgeBaseCategoryResource($know);
    }

   public function addCatItem(Request $request) {
       $items = KnowledgeBaseItem::create($request->all());

       return new KnowledgeBaseItemResource($items);
   }

   public function getItemPage(Request $request) {
    //    return $request->all();
       $item = KnowledgeBaseItem::findOrFail($request->input('item_id'));
       $items = KnowledgeBaseItem::select('*')->where('cat_id',$request->input('cat_id'))->get();
       
       return [new KnowledgeBaseItemResource($item),KnowledgeBaseItemResource::collection($items)];

   }

   public function getEditItem(Request $request) {
    //    return $request->all();
       $item = KnowledgeBaseItem::findOrFail($request->input('id'));

       return new KnowledgeBaseItemResource($item);
   }

   public function updateItem(Request $request) {
    //    return $request->all();

       $item = KnowledgeBaseItem::findOrFail($request->input('id'));

       $item->update($request->all());

       return new KnowledgeBaseItemResource($item);
   }

}
