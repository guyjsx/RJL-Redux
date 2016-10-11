<?php

namespace Entities;

use Illuminate\Database\Eloquent\Model;

class States extends Model
{
    public static function getStates() {
        $states = array(
            array('name' => 'AL'), array('name' => 'AK'), array('name' => 'AS'), array('name' => 'AZ'), array('name' => 'AR'), array('name' => 'CA'), array('name' => 'CO'), array('name' => 'CT'), array('name' => 'DE'), array('name' => 'DC'), array('name' => 'FM'), array('name' => 'FL'), array('name' => 'GA'), array('name' => 'GU'), array('name' => 'HI'), array('name' => 'ID'), array('name' => 'IL'), array('name' => 'IN'), array('name' => 'IA'), array('name' => 'KS'), array('name' => 'KY'), array('name' => 'LA'), array('name' => 'ME'), array('name' => 'MH'), array('name' => 'MD'), array('name' => 'MA'), array('name' => 'MI'), array('name' => 'MN'), array('name' => 'MS'), array('name' => 'MO'), array('name' => 'MT'), array('name' => 'NE'), array('name' => 'NV'), array('name' => 'NH'), array('name' => 'NJ'), array('name' => 'NM'), array('name' => 'NY'), array('name' => 'NC'), array('name' => 'ND'), array('name' => 'MP'), array('name' => 'OH'), array('name' => 'OK'), array('name' => 'OR'), array('name' => 'PW'), array('name' => 'PA'), array('name' => 'PR'), array('name' => 'RI'), array('name' => 'SC'), array('name' => 'SD'), array('name' => 'TN'), array('name' => 'TX'), array('name' => 'UT'), array('name' => 'VT'), array('name' => 'VI'), array('name' => 'VA'), array('name' => 'WA'), array('name' => 'WV'), array('name' => 'WI'), array('name' => 'WY'), array('name' => 'AE'), array('name' => 'AA'), array('name' => 'AP')
        );

        return $states;
    }

}