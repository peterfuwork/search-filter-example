import React from 'react';

const SortByIngredients = (props) => {
    return (
      <div className="checkboxes">
        <fieldset className="fieldset">
          <legend>選擇你的食材</legend>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="肉" name="肉" value="肉" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="肉">肉</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/wcikmzmlmisu3yg/IMG_0149.PNG?raw=1" alt="肉" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="水果" name="水果" value="水果" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="水果">水果</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/ocgnzo2vl7hgorm/IMG_0153.PNG?raw=1" alt="水果" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="蔬菜" name="蔬菜" value="蔬菜" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="蔬菜">蔬菜</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/g7ouu1cqe9gyrsr/IMG_0151.PNG?raw=1" alt="蔬菜" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="麵粉" name="麵粉" value="麵粉" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="麵粉">麵粉</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/dinq8cmtirgurf8/IMG_0152.PNG?raw=1" alt="麵粉" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="冰塊" name="冰塊" value="冰塊" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="冰塊">冰塊</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/bb1zw6mrzgmazoy/IMG_0168.PNG?raw=1" alt="冰塊" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="蘑菇" name="蘑菇" value="蘑菇" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="蘑菇">蘑菇</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/prdk7pun1pgm7vk/IMG_0155.PNG?raw=1" alt="蘑菇" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="蜂蜜" name="蜂蜜" value="蜂蜜" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="蜂蜜">蜂蜜</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/hqgkjyaczu5yhpk/IMG_0156.PNG?raw=1" alt="蜂蜜" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="牛奶" name="牛奶" value="牛奶" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="牛奶">牛奶</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/k173chtrvkl4bs8/IMG_0157.PNG?raw=1" alt="牛奶" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="魚類" name="魚類" value="魚類" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="魚類">魚類</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/74o587fcp1rcab6/IMG_0175.PNG?raw=1" alt="魚類" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="特定海鮮類" name="特定海鮮類" value="特定海鮮類" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="特定海鮮類">特定海鮮類</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/8v0mff3rcczngbi/IMG_0262.png?raw=1" alt="特定海鮮類" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="草莓" name="草莓" value="草莓" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="草莓">草莓</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/1gdm8658von12xk/IMG_0150.PNG?raw=1" alt="草莓" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="松茸" name="松茸" value="松茸" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="松茸">松茸</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/nwz6u58pxf1c8tj/IMG_0154.PNG?raw=1" alt="松茸" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="胡蘿蔔" name="胡蘿蔔" value="胡蘿蔔" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="胡蘿蔔">胡蘿蔔</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/m7id82ob8daakgc/IMG_0177.PNG?raw=1" alt="胡蘿蔔" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="藍莓" name="藍莓" value="藍莓" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="藍莓">藍莓</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/qdtpl7gc373i46z/IMG_0159.PNG?raw=1" alt="藍莓" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="玉米" name="玉米" value="玉米" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="玉米">玉米</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/rclz35hqqwxdo2y/IMG_0160.PNG?raw=1" alt="玉米" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="朝天椒" name="朝天椒" value="朝天椒" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="朝天椒">朝天椒</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/v1b0f6fjd0t7014/IMG_0178.PNG?raw=1" alt="朝天椒" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="禽蛋" name="禽蛋" value="禽蛋" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="禽蛋">禽蛋</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/xqack21losysikc/IMG_0161.PNG?raw=1" alt="禽蛋" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="椰子" name="椰子" value="椰子" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="椰子">椰子</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/nha1fwldv1ng574/IMG_0176.PNG?raw=1" alt="椰子" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="西瓜" name="西瓜" value="西瓜" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="西瓜">西瓜</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/xrizlud97uq47ak/IMG_0162.PNG?raw=1" alt="西瓜" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="南瓜" name="南瓜" value="南瓜" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="南瓜">南瓜</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/2eb4jdlbvf5estz/IMG_0163.PNG?raw=1" alt="南瓜" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="大米" name="大米" value="大米" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="大米">大米</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/yhi6am57uwlun20/IMG_0164.PNG?raw=1" alt="大米" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="醬料" name="醬料" value="醬料" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="醬料">醬料</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/skhkhh0b27ywo38/IMG_0169.PNG?raw=1" alt="醬料" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="調料" name="調料" value="調料" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="調料">調料</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/w1wzzdax4l8x9p6/IMG_0170.PNG?raw=1" alt="調料" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="鳳梨" name="鳳梨" value="鳳梨" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="鳳梨">鳳梨</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/fs7tt85tqgeabub/IMG_0165.PNG?raw=1" alt="鳳梨" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="蔥薑蒜" name="蔥薑蒜" value="蔥薑蒜" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="蔥薑蒜">蔥薑蒜</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/dqduvlepje3psd6/IMG_0166.PNG?raw=1" alt="蔥薑蒜" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="動物內臟" name="動物內臟" value="動物內臟" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="動物內臟">動物內臟</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/sdy3i1bkasxkhmf/IMG_0167.PNG?raw=1" alt="動物內臟" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="食用油" name="食用油" value="食用油" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="食用油">食用油</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/swmptpim696z61r/IMG_0171.PNG?raw=1" alt="食用油" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="豆腐" name="豆腐" value="豆腐" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="豆腐">豆腐</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/d6bkoak89uy3wob/IMG_0172.PNG?raw=1" alt="豆腐" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="粉絲" name="粉絲" value="粉絲" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="粉絲">粉絲</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/14etogqsjv2vvmp/IMG_0174.PNG?raw=1" alt="粉絲" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="糖" name="糖" value="糖" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="糖">糖</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/xfcgd8ei8os7t71/IMG_0173.PNG?raw=1" alt="糖" />
          </div>
          <div className="ingredient-checkbox">
            <input className="checkbox" type="checkbox" id="特殊備註" name="特殊備註" value="特殊備註" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label className="ingredient-label" htmlFor="特殊備註">特殊備註</label>&nbsp;
            <img className="ingredient-image" src="https://www.dropbox.com/s/z9gdvkhv14m61tl/IMG_0263.png?raw=1" alt="特殊備註" />
          </div>
          <div className="deselect-checkbox">
            <input className="checkbox" type="checkbox" id="取消所有選取" name="取消所有選取" value="取消所有選取" onChange={() => props.resetAllCheckboxes()} />
            <label className="ingredient-label" htmlFor="取消所有選取">取消所有選取</label>&nbsp;
          </div>
        </fieldset>
      </div>
    );
}

export default SortByIngredients;